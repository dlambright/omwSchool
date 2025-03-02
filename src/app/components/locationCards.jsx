import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    title: 'Roy, UT',
    employees: [
      'Shelly Bailey: Owner',
      'Katelyn Cefalo: Director',
      'Kaitlyn Bailey: Nutrition Specialist',
    ]
  },
  {
    title: 'Clinton, UT',
    employees: [
      'Shelly Bailey: Owner',
      'Rylee Cefalo: Director',
      'Kaitlyn Bailey: Nutrition Specialist',
    ]
  },
  {
    title: 'Pleasant View, UT',
    employees: [
      'Shelly Bailey: Owner',
      'Kassidy Webster: Director',
      'Kaitlyn Bailey: Nutrition Specialist',
    ]
  }
];

const styles = {
  employeeRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    margin: '0 0 8px 8px',
    justifyContent: 'flex-start',
    width: '100%',
  },
  employeeImage: {
    height: '30px',
    width: '30px',
  }
}

export const LocationCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Our Locations</h1>
          </div>
        </div>

        {
          data.map( ( location ) => (
            <div className="col-4">
              <div className="paper">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <h1 style={{ margin: '0px' }}>
                    {location.title}
                  </h1>
                </div>
                <span>Staff</span>
                {location.employees.map( ( employee ) => (
                  <div style={styles.employeeRowContainer}>
                    <div style={{ margin: '8px 8px 8px 0' }}>
                      <div style={styles.employeeImage}>
                        <FontAwesomeIcon icon={faImagePortrait} size="3x" />
                      </div>
                    </div>
                    <span>{employee}</span>
                  </div>
                ) )}
              </div>
            </div>
          ) )}
      </div>
    </div>
  );
};