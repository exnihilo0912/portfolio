import { useState } from "react";
import styled from "styled-components";

import CssButton from './components/CssButton';
import Form from './components/Form';
import TextInput from "./components/TextInput";
import RadioInputCollection from './components/RadioInputCollection';

const StyledApp = styled(App)`
  padding: 1rem;
`;

function App(props) {
  const [formData, setFormData] = useState({
    mortgageAmount: '',
    mortgageTerm: '',
    interestRate: '',
    mortgageType: '',
  });
  const handleMortgageAmountChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      mortgageAmount: event.target.value
    }));
  };
  const handleMortgageTermChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      mortgageTerm: event.target.value
    }));
  };
  const handleMortgageRateChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      interestRate: event.target.value
    }));
  };
  const handleMortgageTypeChange = (event) => {
    console.log({ event , value: event.target.value });

    setFormData((previousState) => ({
      ...previousState,
      mortgageType: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ formData });
  };

  return (
    <main {...props}>
      <Form title="Mortgage Calculator" onSubmit={handleSubmit}>
        <CssButton className="button button--link">Clear all</CssButton>
        <section>
          <TextInput
            id="mortgage-amount"
            label="Mortgage Amount"
            prefixText="£"
            value={formData.mortgageAmount}
            onChange={handleMortgageAmountChange}
          />
          <TextInput
            id="mortgage-term"
            label="Mortgage Term"
            suffixText="years"
            value={formData.mortgageTerm}
            onChange={handleMortgageTermChange}
          />

          <TextInput
            id="interest-rate"
            label="Interest Rate"
            suffixText="%"
            value={formData.interestRate}
            onChange={handleMortgageRateChange}
          />
        </section>
        <RadioInputCollection
          radios={[
           { label: 'Repayment', id: 'repayment', value: 'repayment' },
            { label: 'Interest Only', id: 'interest-only', value: 'interest' },
          ]}
          name="mortgage-type"
          onChange={handleMortgageTypeChange}
        />
        <footer>
          <CssButton
            className="button button--primary button--rounded"
            type="submit"
          >
            Calculate Repayments
          </CssButton>
        </footer>
      </Form>
      <section>
        <section>
          <h3>Results shown here</h3>
          <p>
            Complete the form and click “calculate repayments” to see what 
            your monthly repayments would be.
          </p>
        </section>
        <section>
          <h3>Your results</h3>
          <p>
            Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.
          </p>
          <article>
            <div>
              <p>Your monthly repayments</p>
              <output></output>
            </div>
            <div>
              <p>Total you'll repay over the term</p>
              <output></output>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default StyledApp;