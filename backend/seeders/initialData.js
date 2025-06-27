const { Usuario, Factura, Procedimiento } = require('../models');

module.exports = async () => {
  try {
    //facturas
    await Factura.bulkCreate([
      {
        num_factura: 'FACT-001',
        fecha_expedicion: '2023-06-01',
        fecha_inicio: '2023-05-01',
        fecha_final: '2023-05-31',
        num_documento_obligado: '900123456',
        cod_entidad: 'EPS001',
        valor_total: 2500000.00,
        estado: 'PAGADA'
      },

      {
        num_factura: 'FACT-002',
        fecha_expedicion: '2023-07-01',
        fecha_inicio: '2023-06-01',
        fecha_final: '2023-06-30',
        num_documento_obligado: '900789012',
        cod_entidad: 'EPS002',
        valor_total: 1500000.00,
        estado: 'PENDIENTE'
      },
      {
        num_factura: 'FACT-003',
        fecha_expedicion: '2023-08-01',
        fecha_inicio: '2023-07-01',
        fecha_final: '2023-07-31',
        num_documento_obligado: '900345678',
        cod_entidad: 'EPS001',
        valor_total: 3000000.00,
        estado: 'PAGADA'
      },
      {
        num_factura: 'FACT-004',
        fecha_expedicion: '2023-09-01',
        fecha_inicio: '2023-08-01',
        fecha_final: '2023-08-31',
        num_documento_obligado: '900987654',
        cod_entidad: 'EPS003',
        valor_total: 1800000.00,
        estado: 'PENDIENTE'
      }
    ], { ignoreDuplicates: true });

    // usuarios
    await Usuario.bulkCreate([
      {
        num_documento: '123456789',
        tipo_documento: 'CC',
        primer_nombre: 'Juan',
        segundo_nombre: 'Carlos',
        primer_apellido: 'Pérez',
        segundo_apellido: 'Gómez',
        sexo: 'M',
        fecha_nacimiento: '1985-05-15',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '05001',
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '987654321',
        tipo_documento: 'CC',
        primer_nombre: 'María',
        segundo_nombre: 'Antonia',
        primer_apellido: 'García',
        sexo: 'F',
        fecha_nacimiento: '1990-08-22',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '11001',
        cod_zona_residencia: 'U'
      },
    
      {
        num_documento: '112233445',
        tipo_documento: 'CC',
        primer_nombre: 'Andrés',
        segundo_nombre: 'Felipe',
        primer_apellido: 'Ramírez',
        segundo_apellido: 'Silva',
        sexo: 'M',
        fecha_nacimiento: '1978-11-30',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '76001', // Cali
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '556677889',
        tipo_documento: 'TI', // Tarjeta de Identidad
        primer_nombre: 'Sofía',
        segundo_nombre: 'Maria',
        primer_apellido: 'Martínez',
        segundo_apellido: 'López',
        sexo: 'F',
        fecha_nacimiento: '2005-03-10',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '08001', // Barranquilla
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '998877665',
        tipo_documento: 'CC',
        primer_nombre: 'Luis',
        segundo_nombre: 'Fernando',
        primer_apellido: 'Hernández',
        sexo: 'M',
        fecha_nacimiento: '1965-01-20',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '68001', // Bucaramanga
        cod_zona_residencia: 'R' // Rural
      },
      {
        num_documento: '443322110',
        tipo_documento: 'CE', // Cédula de Extranjería
        primer_nombre: 'Ana',
        segundo_nombre: 'Isabel',
        primer_apellido: 'González',
        segundo_apellido: 'Díaz',
        sexo: 'F',
        fecha_nacimiento: '1992-09-05',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '05001', // Medellín
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '102030405',
        tipo_documento: 'CC',
        primer_nombre: 'Pedro',
        segundo_nombre: 'Jose',
        primer_apellido: 'Rodríguez',
        sexo: 'M',
        fecha_nacimiento: '1980-04-18',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '19001', // Popayán
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '607080901',
        tipo_documento: 'CC',
        primer_nombre: 'Laura',
        segundo_nombre: 'Cristina',
        primer_apellido: 'Paternina',
        segundo_apellido: 'Castro',
        sexo: 'F',
        fecha_nacimiento: '1995-12-01',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '13001', // Cartagena
        cod_zona_residencia: 'U'
      },
      {
        num_documento: '213243546',
        tipo_documento: 'CC',
        primer_nombre: 'Diego',
        segundo_nombre: 'Fernando',
        primer_apellido: 'Valencia',
        sexo: 'M',
        fecha_nacimiento: '1973-07-25',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '76001', // Cali
        cod_zona_residencia: 'R'
      },
      {
        num_documento: '789012345',
        tipo_documento: 'CC',
        primer_nombre: 'Nicol',
        segundo_nombre: 'Valeria',
        primer_apellido: 'Ospina',
        sexo: 'F',
        fecha_nacimiento: '1988-02-14',
        cod_pais_residencia: '170',
        cod_municipio_residencia: '05001', // Medellín
        cod_zona_residencia: 'U'
      }
    ], { ignoreDuplicates: true });

    //procedimientos
    await Procedimiento.bulkCreate([
      {
        cod_procedimiento: '890201',
        fecha_atencion: '2023-05-10',
        hora_atencion: '08:30',
        valor: 150000.00,
        cod_servicio: '010101',
        cod_diagnostico: 'J189',
        num_autorizacion: 'AUT001',
        concepto_recaudo: '01',
        valor_pago_moderador: 0,
        num_factura: 'FACT-001',
        num_documento: '123456789'
      },
      {
        cod_procedimiento: '890202',
        fecha_atencion: '2023-05-12',
        valor: 200000.00,
        cod_servicio: '010102',
        cod_diagnostico: 'E119',
        num_factura: 'FACT-001',
        num_documento: '987654321'
      },
      
      {
        cod_procedimiento: '890303',
        fecha_atencion: '2023-06-05',
        hora_atencion: '10:00',
        valor: 350000.00,
        cod_servicio: '020201',
        cod_diagnostico: 'K358',
        num_autorizacion: 'AUT002',
        concepto_recaudo: '01',
        valor_pago_moderador: 0,
        num_factura: 'FACT-002',
        num_documento: '112233445'
      },
      {
        cod_procedimiento: '890404',
        fecha_atencion: '2023-06-15',
        hora_atencion: '14:00',
        valor: 80000.00,
        cod_servicio: '030301',
        cod_diagnostico: 'R51',
        num_autorizacion: 'AUT003',
        concepto_recaudo: '02',
        valor_pago_moderador: 10000,
        num_factura: 'FACT-002',
        num_documento: '556677889'
      },
      {
        cod_procedimiento: '890505',
        fecha_atencion: '2023-07-01',
        hora_atencion: '09:00',
        valor: 500000.00,
        cod_servicio: '040401',
        cod_diagnostico: 'I10',
        num_autorizacion: 'AUT004',
        concepto_recaudo: '01',
        valor_pago_moderador: 0,
        num_factura: 'FACT-003',
        num_documento: '998877665'
      },
      {
        cod_procedimiento: '890606',
        fecha_atencion: '2023-07-10',
        hora_atencion: '11:30',
        valor: 120000.00,
        cod_servicio: '050501',
        cod_diagnostico: 'M545',
        num_autorizacion: 'AUT005',
        concepto_recaudo: '02',
        valor_pago_moderador: 15000,
        num_factura: 'FACT-003',
        num_documento: '443322110'
      },
      {
        cod_procedimiento: '890707',
        fecha_atencion: '2023-08-01',
        hora_atencion: '16:00',
        valor: 250000.00,
        cod_servicio: '060601',
        cod_diagnostico: 'Z000',
        num_autorizacion: 'AUT006',
        concepto_recaudo: '01',
        valor_pago_moderador: 0,
        num_factura: 'FACT-004',
        num_documento: '102030405'
      },
      {
        cod_procedimiento: '890808',
        fecha_atencion: '2023-08-10',
        hora_atencion: '07:45',
        valor: 90000.00,
        cod_servicio: '070701',
        cod_diagnostico: 'G439',
        num_autorizacion: 'AUT007',
        concepto_recaudo: '02',
        valor_pago_moderador: 5000,
        num_factura: 'FACT-004',
        num_documento: '607080901'
      },
      {
        cod_procedimiento: '890909',
        fecha_atencion: '2023-08-20',
        hora_atencion: '13:00',
        valor: 180000.00,
        cod_servicio: '080801',
        cod_diagnostico: 'L209',
        num_autorizacion: 'AUT008',
        concepto_recaudo: '01',
        valor_pago_moderador: 0,
        num_factura: 'FACT-004',
        num_documento: '213243546'
      },
      {
        cod_procedimiento: '891010',
        fecha_atencion: '2023-08-25',
        hora_atencion: '09:30',
        valor: 75000.00,
        cod_servicio: '090901',
        cod_diagnostico: 'F329',
        num_autorizacion: 'AUT009',
        concepto_recaudo: '02',
        valor_pago_moderador: 8000,
        num_factura: 'FACT-004',
        num_documento: '789012345'
      }
    ], { ignoreDuplicates: true });

    console.log('✅ Datos de prueba insertados correctamente');
  } catch (error) {
    console.error('❌ Error al insertar datos de prueba:', error);
  }
};