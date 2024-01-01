const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#Weight').value); // Fix: Corrected ID to 'Weight'
    let results = document.querySelector('#results'); // Fix: Removed .value and corrected ID to 'results'

    const weight_guide = document.querySelector('#Weight-guide')
    const ele = weight_guide.getElementsByTagName('p')
    let wgresult;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height.";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight.";
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Show the result
        if(bmi < 18.6)
        {
            wgresult = ele[0].innerHTML
        }
        else if(bmi > 18.6 && bmi < 24.8)
        {
            wgresult = ele[1].innerHTML
        }
        else{
            wgresult = ele[2].innerHTML
        }
        results.innerHTML = `<span>${bmi}</span><br>
                            <span>${wgresult}</span>`;
    }
});
