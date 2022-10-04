$(function () {
    $('.filter-style').styler();

    // $(".js-range-slider").ionRangeSlider({
    //     type: "double",
    //     min: 100,
    //     max: 5000,
    // });






    const rangeSlider = document.getElementById('range-slider');

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [500, 5000],
            connect: true,
            step: 1,
            range: {
                'min': [500],
                'max': [5000]
            },
        });

        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');
        const inputs = [input0, input1];

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            rangeSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }








    $(".filter__item-drop").on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    })






    const rangeSliderr = document.getElementById('range-sliderr');


    noUiSlider.create(rangeSliderr, {
        start: [500, 5000],
        connect: true,
        // step: 1,
        range: {
            'min': [500],
            'max': [5000]
        },

    });


    const inputm0 = document.getElementById('inputm-0');
    const inputm1 = document.getElementById('inputm-1');
    const inputs = [inputm0, inputm1];


});