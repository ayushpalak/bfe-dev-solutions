
export default function () {
    function model(state, elem) {
        // initializing element value with state value.
        elem.value = state.value;

        // setting getter and setter for properties.
        Object.defineProperty(state, 'value', {
            get: () => elem.value,
            set: (val = state.value) => elem.value = val
        }
        );

        // to update state on change of input.value;
        elem.addEventListener('change', function (e) {
            state.value = e.target.value;
        });
    }




    var input = document.createElement('input');
    var state = { value: 'BFE' };
    model(state, input);
    console.log(input.value) // 'BFE'
    state.value = 'dev'
    console.log(input.value) // 'dev'
    input.value = 'BFE.dev'
    input.dispatchEvent(new Event('change'))
    console.log(state.value) // 'BFE.dev'
};
