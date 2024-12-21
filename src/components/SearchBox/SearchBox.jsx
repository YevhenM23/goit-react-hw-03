import { Field, Form, Formik } from "formik";

const SearchBox = ({ filter, onFilterChange }) => {
    const handleSearch = values => {
        onFilterChange(values.search)
    }

    return (
        <Formik initialValues={filter} onSubmit={handleSearch}>
            {() => (
                <Form>
                    <label>
                        <span>Find contacts by name</span>
                    <Field
                            id='search'
                            name='search'
                            type='text'
                            onChange={(e) => onFilterChange(e.target.value)}
                    ></Field>
                    </label>
                    
                        
                </Form>
            
            )
            }

        </Formik>
    
    );
};

export default SearchBox;