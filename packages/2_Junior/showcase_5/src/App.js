import styled from "styled-components";

import Button from './components/Button';
import Form from './components/Form';
import TextInput from "./components/TextInput";

const StyledApp = styled(App)`
  padding: 1rem;
`;

function App(props) {
  return (
    <main {...props}>
      <Form title="Mortgage Calculator">
        <Button type="link">Clear All</Button>

        <TextInput label="Mortgage Amount" suffixText="%"/>
        toto
        <label>Mortgage Term</label>
        <input />

        <label>Interest Rate</label>
        <input />

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
          <Button>Calculate Repayments</Button>
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