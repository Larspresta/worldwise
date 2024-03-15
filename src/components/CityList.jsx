import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import PropTypes from "prop-types";

import styles from "./CityList.module.css";
import { useCities } from "./Contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="add your first city by clicking on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
