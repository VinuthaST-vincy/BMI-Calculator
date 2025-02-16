document.getElementById("bmiform").addEventListener('submit',function(e){
    
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const feet = parseInt(document.getElementById('height-feet').value);
    const inches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (gender && age && feet && inches && weight){

        const heightInMeters = ((feet * 12)+inches) * 0.0254; //Height in meters
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");

        let category = '';

        if(bmi<18.5)
        {
            category='Under weight';
        }
        else if(bmi >= 18.5 && bmi<24.9)
        {
            category = 'Normal Weight';
        }
        else if(bmi>=25 && bmi>24.9){
            category = 'Over Weight';
        }
        else{
            category = 'Obese';

        }

        let resultMessage='Your BMI:' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category:' + category;

        resultElement.innerHTML = resultMessage;

    }



} );