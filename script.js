document.addEventListener("DOMContentLoaded", function () {
    if (typeof PDFObject !== "undefined" && PDFObject) {
        var options = {
            height: "100vh" // Full screen height
        };

        var pdfFile = "RaiderReportHOCO.pdf"; // Path to your PDF
        PDFObject.embed(pdfFile, "#pdf-viewer", options);
    } else {
        console.error("PDFObject library is missing or failed to load.");
    }
});
