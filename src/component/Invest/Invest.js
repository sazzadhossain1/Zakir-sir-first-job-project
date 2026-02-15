import React from "react";
import "./Invest.css";

const Invest = () => {
  return (
    <div className="invest_parent_div">
      <h1 className="form_title">Investor Interest Form</h1>

      <form className="invest_form">
        {/* 1. Basic Information */}
        <h2>1. Basic Information</h2>

        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input
          type="tel"
          placeholder="Mobile / WhatsApp Number (with country code)"
          required
        />
        <input type="text" placeholder="Country of Residence" />
        <input type="text" placeholder="Nationality" />
        {/* <input type="text" placeholder="Time Zone (optional)" /> */}

        {/* 2. Investor Background */}
        <h2>2. Investor Background</h2>

        <label>Are you investing as:</label>
        <select>
          <option>Individual</option>
          <option>Company</option>
          <option>Angel group </option>
        </select>

        <textarea placeholder="Occupation / Business Background"></textarea>

        <label>Have you invested in startups before?</label>
        <select>
          <option>No</option>
          <option>Yes</option>
        </select>

        <label>If yes, what types of startups?</label>
        <select>
          <option>Tech</option>
          <option>Marketplace</option>
          <option>Logistics</option>
          <option>Fintech</option>
          <option>Other</option>
        </select>

        {/* 3. Investment Interest */}
        <h2>3. Investment Interest</h2>

        <label>How did you hear about TripShipTask?</label>
        <select>
          <option>Friend / referral</option>
          <option>Social media</option>
          <option>Search</option>
          <option>Event / community</option>
          <option>Youtube</option>
          <option>Other</option>
        </select>

        <textarea placeholder="Why are you interested in investing in TripShipTask?"></textarea>

        <label>Amount interested to invest:</label>
        <select>
          <option>Below $100</option>
          <option>$100–$500</option>
          <option>$500–$1,000</option>
          <option>$1,000–$5,000</option>
          <option>Above $5,000</option>
        </select>

        {/* <label>Are you interested in:</label>
        <select>
          <option>Equity</option>
          <option>Revenue share</option>
          <option>Convertible note / SAFE</option>
          <option>Not sure yet</option>
        </select> */}

        {/* 4. Risk Awareness */}
        <h2>4. Risk Awareness & Intent</h2>

        <label>Are you aware startup investments are high-risk?</label>
        <select>
          <option>Yes, I understand</option>
          <option>I would like more information</option>
        </select>

        <label>Investment time horizon:</label>
        <select>
          <option>1–2 years</option>
          <option>3–5 years</option>
          <option>Long term (5+ years)</option>
        </select>

        <label>What matters most to you?</label>
        <select>
          <option>Financial return</option>
          <option>Supporting innovation in Bangladesh</option>
          <option>Social impact / employment</option>
          <option>Learning and network</option>
          <option>Combination of the above</option>
        </select>

        {/* 5. Compliance */}
        {/* <h2>5. Compliance & Verification</h2>

        <label>Are you legally allowed to invest?</label>
        <select>
          <option>Yes</option>
          <option>Not sure</option>
        </select>

        <label>Can you provide identity verification later?</label>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select> */}

        {/* 6. Engagement */}
        <h2>6. Engagement & Next Steps</h2>

        <label>Passive investor only (Only as an investor)</label>
        <select>
          <option>Mentorship</option>
          <option>Business connections</option>
          <option>Market expansion support</option>
          <option>Passive investor only</option>
        </select>

        {/* <label>Would you like updates?</label>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select> */}

        <textarea placeholder="Any questions or comments?"></textarea>

        {/* Final Consent */}
        <div className="consent">
          <input type="checkbox" required />
          <span>
            I confirm that the information provided is accurate and I understand
            this form does not guarantee acceptance of my investment.
          </span>
        </div>

        <button type="submit">Submit Interest</button>
      </form>
    </div>
  );
};

export default Invest;
