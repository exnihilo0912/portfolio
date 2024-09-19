import { useState } from "react";
import styled from "styled-components";

import Button from './components/Button';
import Form from './components/Form';
import TextInput from "./components/TextInput";

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
  const onMortgaeAmountChangeHandler = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      mortgageAmount: event.target.value
    }));
  };
  return (
    <main {...props}>
      <Form title="Mortgage Calculator">
        <Button type="link">Clear All</Button>
        <section>
          <TextInput
            id="mortgage-amount"
            label="Mortgage Amount"
            prefixText="£"
            value={formData.mortgageAmount}
            onChange={onMortgaeAmountChangeHandler}
          />
          <output>{formData.mortgageAmount}</output>

          <TextInput
            id="mortgage-term"
            label="Mortgage Term"
            suffixText="years"
          />

          <TextInput
            id="interest-rate"
            label="Interest Rate"
            suffixText="%"
          />
        </section>
        <fieldset>
          <legend>Mortgage Type</legend>
          <ul>
            <li>
              <input />
              <label>Repayment</label>
            </li>
            <li>
              <input />
              <label>Interest Only</label>
            </li>
          </ul>
        </fieldset>
        <footer>
          <Button $fullWidth>Calculate Repayments</Button>
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