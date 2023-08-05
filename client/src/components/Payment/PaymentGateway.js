import React, { useState } from "react";

const PaymentGateway = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [name, setName] = useState("Arsil Malek");
  const [email, setEmail] = useState("arsil8356@gmail.com");
  const [mobile, setMobile] = useState("9574312604");
  const [confirmation, setConfirmation] = useState(false);

  const bankOptions = [
    {
      name: "State Bank of India",
    },
    {
      name: "HDFC Bank",
    },
    {
      name: "ICICI Bank",
    },
    {
      name: "Axis Bank",
    },
    {
      name: "Punjab National Bank",
    },
    {
      name: "Bank of Baroda",
    },
    {
      name: "Canara Bank",
    },
    {
      name: "Union Bank of India",
    },
    {
      name: "Kotak Mahindra Bank",
    },
    {
      name: "IndusInd Bank",
    },
  ];

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handlePayButtonClick = () => {
    if (selectedBank !== "" && name !== "" && email !== "" && mobile !== "") {
      // Simulating the payment confirmation process
      setConfirmation(true);
    } else {
      alert("Please fill in all the fields to proceed with payment.");
    }
  };

  const renderBankOptions = () => {
    return bankOptions.map((bank, index) => (
      <option key={index} value={bank.name}>
        {bank.name}
      </option>
    ));
  };
  const styles = {
    container: {
      margin: "20px auto",
      maxWidth: "400px",
      padding: "20px",
      backgroundColor: "#f7f7f7",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#0046be",
      textAlign: "center",
    },
    inputField: {
      fontSize: "16px",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      width: "95.5%",
      marginBottom: 15,
    },
    bankSelect: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    label: {
      fontSize: "16px",
      marginBottom: "5px",
      color: "#555",
    },
    select: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: 5,
      fontSize: "16px",
    },
    payButton: {
      backgroundColor: " #388e3c",
      color: "white",
      padding: "12px 24px",
      marginTop: 12,
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      width: "100%",
      transition: "background-color 0.2s ease",
    },
    successMessage: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#26a65b",
      textAlign: "center",
    },
    visaLogo: {
      width: 100,
      marginRight: 10,
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      {confirmation ? (
        <div>
          <p style={styles.successMessage}>Payment Successful!</p>
          {/* You can add more details here like order summary */}
        </div>
      ) : (
        <div>
          <h2 style={styles.title}>Payment Gateway</h2>
          <div style={styles.bankSelect}>
            <select
              value={selectedBank}
              onChange={handleBankChange}
              style={styles.select}
            >
              <option value="">Select a bank</option>
              {renderBankOptions()}
            </select>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            style={styles.inputField}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={styles.inputField}
          />
          <input
            type="tel"
            placeholder="Mobile"
            value={mobile}
            onChange={handleMobileChange}
            style={styles.inputField}
          />
          <div style={styles.logo}>
            <img
              src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
              alt="Visa"
              style={styles.visaLogo}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1024px-Rupay-Logo.png"
              alt="Mastercard"
              style={styles.visaLogo}
            />
          </div>
          <div style={styles.logo}>
            <img
              src="https://pngimg.com/d/qr_code_PNG7.png"
              alt="Mastercard"
              style={styles.visaLogo}
            />
          </div>
          <button onClick={handlePayButtonClick} style={styles.payButton}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
