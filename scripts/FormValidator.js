export class FormValidator {
  constructor(data) {
    this._validationVariables = data.validationVariables;
    this._formElements = data.formElements;
  }

  _showInputError(_inputElement, _errorMessage) {
    const _errorElement = this._formElements.querySelector(
      `${_inputElement.id} - error`
    );
    _inputElement.classList.add(this._validationVariables.inpuErrorClass);
    _errorElement.textContent = _errorMessage;
    _errorElement.classList.add(this._validationVariables.errorClass);
  }

  _hideInpuError(_inputElement) {
    const _errorElement = formElements.querySelector(
      `${_inputElement.id} - error`
    );
    _inputElement.classList.remove(this._validationVariables.inpuErrorClass);
    _errorElement.classList.remove(this._validationVariables.errorClass);
    _errorElement.textContent = "";
  }

  _checkInputValidity(_inputElement) {
    if (!_inputElement.validity.valid) {
      this._showInputError(_inputElement, _inputElement.validationMessage);
    } else {
      this._hideInpuError(_inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(
        this._validationVariables.inactiveButtonClass
      );
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(
        this._validationVariables.inactiveButtonClass
      );
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners(){
    this._inputList = Array.from(this._formElements.querySelectorAll(this._validationVariables.inputSelector));
    this._toggleButtonState();
    this._inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => {
        this._checkInputValidity(_inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(){
    this._setEventListeners();
  }
}
