import { useState } from 'react';
import './RipsViewer.css';

const RipsViewer = () => {
    const [numFactura, setNumFactura] = useState('');
    const [ripsData, setRipsData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRipsData = async () => {
        if (!numFactura.trim()) {
            setError('Por favor ingrese un número de factura válido');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/api/rips-json/${numFactura}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al obtener los datos RIPS');
            }

            const data = await response.json();
            setRipsData(data);
        } catch (err) {
            setError(err.message);
            setRipsData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchRipsData();
        }
    };

    return (
        <div className="rips-viewer-container">
            <h1>Generador de RIPS JSON</h1>
            <div className="search-container">
                <input
                    type="text"
                    value={numFactura}
                    onChange={(e) => setNumFactura(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ingrese número de factura"
                    disabled={loading}
                />
                <button
                    onClick={fetchRipsData}
                    disabled={loading || !numFactura.trim()}
                >
                    {loading ? 'Cargando...' : 'Generar RIPS'}
                </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            {ripsData && (
                <div className="results-container">
                    <div className="factura-info">
                        <h2>Factura: {ripsData.rips.numFactura}</h2>
                        <p>Documento Obligado: {ripsData.rips.numDocumentoIdObligado}</p>
                    </div>

                    <div className="usuarios-section">
                        <h3>Pacientes ({ripsData.rips.usuarios.length})</h3>
                        <div className="usuarios-grid">
                            {ripsData.rips.usuarios.map((usuario) => (
                                <div key={usuario.numDocumentoIdentificacion} className="usuario-card">
                                    <div className="usuario-header">
                                        <h4>{usuario.nombreUsuario}</h4>
                                        <span>{usuario.tipoDocumentoIdentificacion}-{usuario.numDocumentoIdentificacion}</span>
                                    </div>
                                    <div className="usuario-details">
                                        <p><strong>Sexo:</strong> {usuario.codSexo}</p>
                                        <p><strong>Nacimiento:</strong> {usuario.fechaNacimiento}</p>
                                        <p><strong>Ubicación:</strong> {usuario.codPaisResidencia} ({usuario.codMunicipioResidencia})</p>
                                    </div>
                                    <div className="procedimientos-list">
                                        <h5>Procedimientos ({usuario.servicios.procedimientos.length})</h5>
                                        <ul>
                                            {usuario.servicios.procedimientos.map((proc) => (
                                                <li key={`${usuario.numDocumentoIdentificacion}-${proc.consecutivo}`}>
                                                    <span>{proc.codProcedimiento}</span>
                                                    <span>{proc.fechaInicioAtencion}</span>
                                                    <span>${proc.vrServicio.toLocaleString()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="json-viewer">
                        <h3>JSON Completo (FEV-RIPS)</h3>
                        <pre>{JSON.stringify(ripsData, null, 2)}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RipsViewer;