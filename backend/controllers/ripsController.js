const { Usuario, Procedimiento, Factura } = require('../models');

// Función auxiliar para formatear fechas
function formatDate(dateValue) {
  if (!dateValue) return null;
  
  // Si ya es un objeto Date válido
  if (dateValue instanceof Date && !isNaN(dateValue)) {
    return dateValue.toISOString().split('T')[0];
  }
  
  // Si es un string que puede convertirse a Date
  const date = new Date(dateValue);
  if (!isNaN(date)) {
    return date.toISOString().split('T')[0];
  }
  
  return null;
}

exports.getRipsJson = async (req, res) => {
  try {
    const { numFactura } = req.params;

    // Verificar si la factura existe
    const factura = await Factura.findOne({ 
      where: { num_factura: numFactura } 
    });
    
    if (!factura) {
      return res.status(404).json({ error: 'Factura no encontrada' });
    }

    // Obtener usuarios y sus procedimientos (máximo 10)
    const usuarios = await Usuario.findAll({
      limit: 10,
      include: [{
        model: Procedimiento,
        where: { num_factura: numFactura },
        required: false
      }]
    });

    // Formatear respuesta según estándar RIPS
    const ripsJson = {
      rips: {
        numNota: null,
        tipoNota: null,
        numFactura: factura.num_factura,
        numDocumentoIdObligado: factura.num_documento_obligado,
        usuarios: usuarios.map((usuario, index) => ({
          consecutivo: index + 1,
          nombreUsuario: `${usuario.primer_nombre} ${usuario.segundo_nombre} ${usuario.primer_apellido}`,
          codSexo: usuario.sexo,
          tipoUsuario: '01', // Consulta externa
          codPaisOrigen: '170', // Colombia
          fechaNacimiento: formatDate(usuario.fecha_nacimiento),
          codPaisResidencia: usuario.cod_pais_residencia,
          codMunicipioResidencia: usuario.cod_municipio_residencia,
          numDocumentoIdentificacion: usuario.num_documento,
          tipoDocumentoIdentificacion: usuario.tipo_documento,
          codZonaTerritorialResidencia: usuario.cod_zona_residencia,
          incapacidad: 'NO',
          servicios: {
            procedimientos: (usuario.Procedimientos || []).map((proc, i) => ({
              idMIPRES: null,
              consecutivo: i + 1,
              codPrestador: '760011190001', // Ejemplo
              grupoServicios: '02', // Consulta externa
              codServicio: proc.cod_servicio,
              codProcedimiento: proc.cod_procedimiento,
              fechaInicioAtencion: proc.fecha_atencion 
                ? `${formatDate(proc.fecha_atencion)} ${proc.hora_atencion || '00:00'}`
                : null,
              codDiagnosticoPrincipal: proc.cod_diagnostico,
              codDiagnosticoRelacionado: proc.cod_diagnostico,
              codComplicacion: proc.cod_complicacion || null,
              numAutorizacion: proc.num_autorizacion || null,
              conceptoRecaudo: proc.concepto_recaudo || '01',
              valorPagoModerador: proc.valor_pago_moderador || 0,
              vrServicio: proc.valor,
              viaIngresoServicioSalud: '01', // Consulta
              finalidadTecnologiaSalud: '44', // Diagnóstico
              modalidadGrupoServicioTecSal: '01', // Presencial
              tipoDocumentoIdentificacion: usuario.tipo_documento,
              numDocumentoIdentificacion: usuario.num_documento,
              numFEVPagoModerador: null
            }))
          }
        }))
      }
    };
    res.json(ripsJson);

  } catch (error) {
    console.error('Error al generar RIPS JSON:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};