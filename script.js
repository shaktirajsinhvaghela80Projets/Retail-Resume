function downloadPDF() {
    window.print();
}

function downloadWord() {
    let content = document.getElementById("resume").innerHTML;

    let html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
    xmlns:w='urn:schemas-microsoft-com:office:word'>
    <head><meta charset='utf-8'></head>
    <body>${content}</body></html>`;

    let blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = url;
    link.download = "Shaktirajsinh_Vaghela_Resume.doc";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
