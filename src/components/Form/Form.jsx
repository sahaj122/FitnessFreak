// table
import DataTable from "../Table/DataTable.jsx";
import Exercise from "../Exercise/Exercise.jsx";
import ChartComp from "../Chart/ChartComp.jsx";

// api
import { getFoodData } from "../../services/api.jsx";

// mui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
import Alert from "@mui/material/Alert";

// logo
import { useRecoilState } from "recoil";
import foodState from "../../store/atoms/FoodState.js";
import dataState from "../../store/atoms/DataState.js";

// component styles
const ButtonStyle = styled(Button)`
  line-height: 2.5;
  font-size: 16px;

  @media (max-width: 440px) {
    width: 10px;
    font-size: 8px;
  }
`;

const TextFieldStyle = styled(TextField)`
  width: 650px;
  background-color: white;

  @media (max-width: 900px) {
    width: 500px;
  }

  @media (max-width: 720px) {
    width: 300px;
  }

  @media (max-width: 550px) {
    width: 200px;
  }

  @media (max-width: 430px) {
    width: 190px;
  }
`;

const AlertStyle = styled(Alert)`
  margin-top: 15px;
`;

const Form = () => {
  const [food, setFood] = useRecoilState(foodState);
  const [data, getData] = useRecoilState(dataState);

  const onValueChange = (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getFoodData(food);
      console.log(response);
      getData(response);
      setFood("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Box>
        <h1 style={{color: "red"}}>Fitness Freak</h1>
        {/* Form And Button  */}
        <form onSubmit={handleSubmit}>
          <TextFieldStyle
            label="Search your favourite food..."
            id="fullWidth"
            value={food}
            onChange={onValueChange}
            autoComplete="off"
          />
          <ButtonStyle
            variant="contained"
            type="submit"
            color="success"
            size="large"
          >
            Find Calories
          </ButtonStyle>
        </form>

        {/* if data is not present */}
        {/* error component */}
        {data && data.length == 0 && (
          <AlertStyle severity="error">No food item found!</AlertStyle>
        )}

        {/* Main Heading */}
        {data && data.length > 0 && (
          <h2 style={{ color: "#AFE1AF", fontSize: "40px" }}>
            {data &&
              data[0].name &&
              data[0].name.charAt(0).toUpperCase() + data[0].name.slice(1)}{" "}
            has a total of{" "}
            <span style={{ color: "#355E3B" }}>
              {data && data[0].calories} calories
            </span>
          </h2>
        )}

        {/* Box */}

        {data && data.length > 0 && (
          <Box
            sx={{
              flexGrow: 1,
              boxShadow: "0px 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <Grid container spacing={6}>
              {/* Table */}
              {data && data.length > 0 && (
                <Grid item xs={12} sm={12} md={6}>
                  {data && data.length > 0 && (
                    <DataTable
                      serving_size={data[0].serving_size_g}
                      carbohydrates={data[0].carbohydrates_total_g}
                      cholesterol={data[0].cholesterol_mg}
                      saturated_fat={data[0].fat_saturated_g}
                      total_fat={data[0].fat_total_g}
                      fiber_content={data[0].fiber_g}
                      potassium={data[0].potassium_mg}
                      protein={data[0].protein_g}
                      sodium={data[0].sodium_mg}
                      sugar={data[0].sugar_g}
                    />
                  )}
                </Grid>
              )}

              {/* Exercise Chart */}

              {data && (
                <Grid item xs={12} sm={12} md={6}>
                  {data && data.length > 0 && (
                    <Exercise
                      calories={data[0].calories}
                      jog={Math.ceil((5 / 75) * data[0].calories)}
                      powerYoga={Math.ceil((15 / 90) * data[0].calories)}
                      gym={Math.ceil(0.21 * data[0].calories)}
                      walk={Math.ceil(0.3 * data[0].calories)}
                    />
                  )}
                </Grid>
              )}
            </Grid>
          </Box>
        )}

        {/* chart */}
        {data && data.length > 0 && (
          <Box>
            <Grid item xs={12} sm={12} md={6}>
              {data && data.length > 0 && (
                <ChartComp
                  name={data[0].name}
                  serving_size={data[0].serving_size_g}
                  carbohydrates={data[0].carbohydrates_total_g}
                  cholesterol={data[0].cholesterol_mg}
                  saturated_fat={data[0].fat_saturated_g}
                  total_fat={data[0].fat_total_g}
                  fiber_content={data[0].fiber_g}
                  potassium={data[0].potassium_mg}
                  protein={data[0].protein_g}
                  sodium={data[0].sodium_mg}
                  sugar={data[0].sugar_g}
                />
              )}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Form;
