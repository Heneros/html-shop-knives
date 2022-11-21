jQuery(document).ready(function ($) {


    $('.filter-style').styler();




    $(".filter__item-drop").on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    })




    const rangeSlider = document.getElementById('range-slider');


    if (rangeSlider != null) {
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












    var stepsSlider = document.getElementById('steps-slider');
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];
    if (stepsSlider != null) {
        noUiSlider.create(stepsSlider, {
            start: [100, 500],
            connect: true,
            range: {
                'min': [100],
                'max': [500]
            },
        });
        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });
        inputs.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });
            input.addEventListener('keydown', function (e) {
                var values = stepsSlider.noUiSlider.get();
            });
        });

    }


    var stepsSlider = document.getElementById('length-slider');
    var input0Length = document.getElementById('input-length-0');
    var input1Length = document.getElementById('input-length-1');
    var inputsTotalLength = [input0Length, input1Length];
    if (stepsSlider != null) {
        noUiSlider.create(stepsSlider, {
            start: [5, 10],
            connect: true,
            range: {
                'min': [5],
                'max': [100]
            },
        });
        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputsTotalLength[handle].value = Math.round(values[handle]);
        });
        inputsTotalLength.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });
            input.addEventListener('keydown', function (e) {
                var values = stepsSlider.noUiSlider.get();
            });
        });
    }


    var widthSlider = document.getElementById('width-total-slider');
    var input0Width = document.getElementById('input-width-0');
    var input1Width = document.getElementById('input-width-1');
    var inputsTotalWidth = [input0Width, input1Width];
    if (widthSlider != null) {
        noUiSlider.create(widthSlider, {
            start: [5, 10],
            connect: true,
            range: {
                'min': [5],
                'max': [100]
            },
        });
        widthSlider.noUiSlider.on('update', function (values, handle) {
            inputsTotalWidth[handle].value = Math.round(values[handle]);
        });
        inputsTotalWidth.forEach(function (input, handle) {
            input.addEventListener('change', function () {
                widthSlider.noUiSlider.setHandle(handle, this.value);
            });
            input.addEventListener('keydown', function (e) {
                var values = widthSlider.noUiSlider.get();
            });
        });
    }


    ////adaptive filters
    const btnFilter = document.querySelector("#btn-filters");
    const shopCatalogLeft = document.querySelector(".shop-catalog__left");
    const shopCatalogFilters = document.querySelector(".shop-catalog__filters");
    const body = document.querySelector("body");
    const blank = document.querySelector(".blank");



    const close = () => {
        shopCatalogFilters.classList.remove("activeLeft");
        shopCatalogLeft.classList.remove("blur");
        body.classList.remove("overflowHidden");
    };

    if (btnFilter != null) {
        btnFilter.addEventListener("click", (e) => {
            shopCatalogFilters.classList.add("activeLeft");
            shopCatalogLeft.classList.add("blur");
            body.classList.add("overflowHidden");
        });
    }

    if (blank != null) {
        blank.addEventListener("click", (e) => {
            close();
        });
    }


})