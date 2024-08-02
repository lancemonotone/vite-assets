document.addEventListener('DOMContentLoaded', function () {
    /**
     * This function adds a class to the input field when the user
     * types in it. This can be used, for example, to show the label
     * preceding the input field. The label is shown preceding the
     * input field when the input field has a class of 'has-value'
     * via CSS.
     */
    document.querySelectorAll('input').forEach(input => {
        //add event listener for change
        input.addEventListener('change', () => {
            if (input.value) {
                input.classList.add('has-value')
            } else {
                input.classList.remove('has-value')
            }
        })
    })
})
