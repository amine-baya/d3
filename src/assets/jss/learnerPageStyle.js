const blackColor = "#000";

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const learnerPageStyle = {
  mainContainer: {
    margin: "70px auto",
    width: "90%",
    borderRadius: "6px"
  },
  boxContainer: {
    margin: "25px",

    "@media (min-width: 100px)": {
      margin: "25px 5px"
    },
    "@media (min-width: 768px)": {
      margin: "25px 5px"
    },
    "@media (min-width: 992px)": {
      margin: "25px 15px"
    },
    "@media (min-width: 1200px)": {
      margin: "25px"
    }
  },
  gridStatistics: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    margin: "0 auto",
    width: "100%",
    gridGap: "20px",
    marginBottom: "50px",
    marginTop: "30px",

    "@media (min-width: 100px)": {
      gridTemplateColumns: "1fr"
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    "@media (min-width: 992px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    }
  },
  headerImg: {
    width: "100%"
  },
  headerBox: {
    borderRadius: "6px",
    boxShadow: "0 15px 35px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)"
  },
  tableStatistics: {
    borderRadius: "6px",
    boxShadow: "0 15px 35px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)",
    padding: "5%"
  },
  communityEvent: {
    borderRadius: "6px",
    boxShadow: "0 15px 35px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)",
    padding: "5%"
  },
  communityEventTitle: {
    textAlign: "left",
    fontSize: "24px",
    margin: "0 0 15px 0",
    padding: "0"
  },
  customRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    backgroundColor: "gray",
    marginBottom: "3px",
    borderRadius: "6px",
    textAlign: "left",
    padding: "8px 10px"
  }
};

export default learnerPageStyle;
