function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumValue;

    // avoid negatives
    if(sumValue < 0) {
        totalClicks.innerText = 0;
    }

    // reset value
    if(click === 0) {
        totalClicks.innerText = 0;
    }
}