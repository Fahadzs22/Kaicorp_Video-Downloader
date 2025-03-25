async function fetchMedia() {
    const url = document.getElementById("videoUrl").value;
    document.getElementById("videoSelect").innerHTML = "<option>Loading...</option>";
    document.getElementById("subtitleSelect").innerHTML = "<option>Loading...</option>";

    try {
        // Simulating a fetch request (replace this with real page scraping logic)
        let response = await fetch(`https://your-api.com/get-video?url=${encodeURIComponent(url)}`);
        let data = await response.json();

        // Populate video quality options
        let videoSelect = document.getElementById("videoSelect");
        videoSelect.innerHTML = "";
        data.videos.forEach(video => {
            let opt = document.createElement("option");
            opt.value = video.url;
            opt.text = `${video.quality} (${video.format})`;
            videoSelect.appendChild(opt);
        });

        // Populate subtitle options
        let subtitleSelect = document.getElementById("subtitleSelect");
        subtitleSelect.innerHTML = "";
        data.subtitles.forEach(sub => {
            let opt = document.createElement("option");
            opt.value = sub.url;
            opt.text = `${sub.language} (${sub.format})`;
            subtitleSelect.appendChild(opt);
        });

    } catch (error) {
        alert("Failed to fetch video details. Try again.");
    }
}

function downloadVideo() {
    let videoUrl = document.getElementById("videoSelect").value;
    window.location.href = videoUrl;
}

function downloadSubtitle() {
    let subtitleUrl = document.getElementById("subtitleSelect").value;
    window.location.href = subtitleUrl;
}
