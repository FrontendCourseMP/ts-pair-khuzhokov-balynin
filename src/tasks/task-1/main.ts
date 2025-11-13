import {getInitials} from './getInitals.js';

const TARGET_FORM_ID = 'task-1';
const TARGET_INPUT_NAME = 'fullName';

const form = document.getElementById(TARGET_FORM_ID);
if (!form || !(form instanceof HTMLFormElement)) {
    throw new Error(`form with id \`${TARGET_FORM_ID}\` not found`);
}

const output = form.querySelector('#output');
if (!output) {
    throw new Error('output not found');
}

const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(form);
    try {
        output.innerHTML = getInitials(formData.get(TARGET_INPUT_NAME)?.toString() || '');
        output.classList.remove('red');
    } catch (error) {
        output.classList.add('red');
        output.innerHTML = error instanceof Error ? error.message : `uknown error`;
    }
};

form.addEventListener('submit', onSubmit);
