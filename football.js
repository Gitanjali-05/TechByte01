document.getElementById("upload-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let fileInput = document.getElementById("videoUpload");
    let videoPlayer = document.getElementById("videoPlayer");
    let analysisResult = document.getElementById("analysisResult");

    if (fileInput.files.length === 0) {
        alert("Please upload a video first.");
        return;
    }

    let formData = new FormData();
    formData.append("file", fileInput.files[0]);

    videoPlayer.src = URL.createObjectURL(fileInput.files[0]);

    // Send video to server for analysis
    let response = await fetch("/analyze", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    analysisResult.innerHTML = <><h2>Analysis Results:</h2><p>${result.feedback}</p></>;
});