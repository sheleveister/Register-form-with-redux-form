import React from 'react';
import '../RegisterForm.css';
import cn from 'classnames';
import { Field } from 'redux-form';


const getValidityClassName = meta => {
  const { active, touched, invalid, valid, asyncValidating } = meta;

  if (asyncValidating) {
    return 'async-validating';
  }
  if (active) {
    return;
  }
  if (touched && invalid) {
    return 'invalid';
  }
  if (touched && valid) {
    return 'valid';
  }
};

export const customInput = ({ label, input, type, meta, autoFocus }) => (
  <div className={cn(
    'custom-input-container',
    { 'flex-row-reverse': type === 'checkbox' },
    { 'dirty': meta.dirty },
    getValidityClassName(meta)
  )}>
    <label>{label}</label>
    <input
      {...input}
      type={type}
      autoFocus={autoFocus}
    />
    {meta.error && meta.touched && !meta.active && (
      <div className="feedback-text error-text">{meta.error}</div>
    )}
  </div>
);

export const customSelect = ({ label, input }) => (
  <div>
    <label>{label}</label>
    <select {...input}>
      <option value="tabs">Tabs</option>
      <option value="spaces">Spaces</option>
    </select>
  </div>
);

export const discounts = ({ fields }) => (
  <div className="custom-field-array-container">
    { fields.map((code, idx) => (
      <div key={idx} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`Discount code #${idx + 1}`}
          autoFocus
        />
        <button type="button"
          onClick={() => fields.remove(idx)}>
          &times;
        </button>
      </div>
    )) }
    <button type="button"
      onClick={() => fields.push()}
    >
      Add {!fields.length ? 'Discount Code(s)' : 'Another'}
    </button>
  </div>
);
