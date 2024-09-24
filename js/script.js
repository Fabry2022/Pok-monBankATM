// Esperar hasta que jsPDF esté listo
window.onload = function() {
    const { jsPDF } = window.jspdf;

    document.getElementById('downloadPDF').addEventListener('click', () => {
        const doc = new jsPDF();

        // Título del documento
        doc.text("Pokemon Bank - Resumen de Cuenta", 10, 10);

        // Información del cliente
        doc.text("Entrenador Pokémon: Ash Ketchum", 10, 20);

        // Resumen de cuenta (Saldo inicial y final)
        doc.text("Saldo Inicial: $1,000.00", 10, 30);
        doc.text("Saldo Final: $1,505.00", 10, 40);

        // Añadir un espacio
        doc.text("Movimientos del Mes de Septiembre:", 10, 50);

        // Añadir la tabla de transacciones
        doc.autoTable({
            startY: 60,
            head: [['Fecha', 'Descripción', 'Monto (USD)']],
            body: [
                ['01/09/2024', 'Depósito', '$500.00'],
                ['05/09/2024', 'Compra en Supermercado', '-$45.00'],
                ['12/09/2024', 'Pago de Servicios', '-$100.00'],
                ['20/09/2024', 'Transferencia Recibida', '$300.00'],
                ['30/09/2024', 'Retiros en Efectivo', '-$150.00']
            ],
        });

        // Descargar el archivo PDF
        doc.save('resumen-cuenta-septiembre.pdf');
    });
};


