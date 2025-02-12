import React, { Dispatch } from 'react';
import Select from 'react-select';
import { ProfileFilters } from '@/lib/types';
import { FilterProfileAction } from '@/components/Profiles/filterReducer';
import { useRouter } from 'next/router';

interface FormProps {
  filters: ProfileFilters;
  dispatch: Dispatch<FilterProfileAction>;
  technologies: { name: string; id: string }[];
  roles: { name: string; id: string }[];
  seniorities: { name: string; id: string }[];
}

const maxTechnologies = 5;

const isValidNewOption = (inputValue, selectValue) =>
  inputValue.length > 0 && selectValue.length < maxTechnologies;

const FilterForm: React.FC<FormProps> = ({
  filters,
  dispatch,
  technologies,
  roles,
  seniorities,
}) => {
  const router = useRouter();
  const activesQuery = Object.prototype.hasOwnProperty.call(
    router.query,
    'activos',
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const isRoleSelected = filters.roleId !== '';
  const isSenioritySelected = filters.seniorityId !== '';

  React.useEffect(() => {
    if (activesQuery)
      dispatch({
        type: 'SET_AVAILABLE',
        payload: true,
      });
  }, [activesQuery, dispatch]);

  return (
    <form onSubmit={onSubmit}>
      <div className="justify-around md:flex md:items-center md:space-x-4 text-gray-50">
        <div className="w-full mt-3 md:mt-0">
          <select
            name="role"
            className={`w-full py-2 text-sm leading-tight bg-gray-900 border border-gray-300 rounded form-select ${
              isRoleSelected ? 'text-gray-50' : 'text-gray-300'
            }`}
            onChange={(event) =>
              dispatch({ type: 'ADD_ROLE', payload: event.target.value })
            }
          >
            {roles.map((role) => (
              <option value={role.id} key={role.id}>
                {role.name}
              </option>
            ))}
            <option value="" key="all">
              Todos
            </option>
            <option value="" key="placeholder" selected disabled hidden>
              Rol
            </option>
          </select>
        </div>
        <div className="w-full mt-3 md:mt-0">
          <select
            name="seniority"
            className={`w-full py-2 text-sm leading-tight bg-gray-900 border border-gray-300 rounded form-select ${
              isSenioritySelected ? 'text-gray-50' : 'text-gray-300'
            }`}
            onChange={(event) =>
              dispatch({ type: 'ADD_SENIORITY', payload: event.target.value })
            }
          >
            {seniorities.map((seniority) => (
              <option value={seniority.id} key={seniority.id}>
                {seniority.name}
              </option>
            ))}
            <option value="" key="placeholder" selected disabled hidden>
              Seniority
            </option>
            <option value="" key="all">
              Todas
            </option>
          </select>
        </div>
        <div className="w-full mt-3 md:mt-0">
          <input
            name="location"
            type="text"
            placeholder="Ubicación"
            className="w-full py-2 text-sm leading-tight placeholder-gray-300 bg-gray-900 border border-gray-300 rounded form-input"
            onChange={(event) =>
              dispatch({ type: 'ADD_LOCATION', payload: event.target.value })
            }
          />
        </div>
        <div className="w-full mt-3 md:mt-0">
          <input
            name="description"
            type="text"
            placeholder="Explora las biografías"
            className="w-full py-2 text-sm leading-tight placeholder-gray-300 bg-gray-900 border border-gray-300 rounded form-input"
            onChange={(event) =>
              dispatch({ type: 'ADD_DESCRIPTION', payload: event.target.value })
            }
          />
        </div>
      </div>
      <div className="items-center w-full mt-4 bg-gray-900 md:flex md:space-x-4">
        <Select
          instanceId="technologies-selector"
          isMulti
          classNamePrefix="react-select"
          className="w-full bg-transparent bg-gray-900 filter-selector bg"
          placeholder="Selecciona tecnologías"
          onChange={(techs) =>
            dispatch({ type: 'ADD_TECHNOLOGIES', payload: techs })
          }
          isValidNewOption={isValidNewOption}
          options={
            filters.technologies?.length === maxTechnologies ? [] : technologies
          }
          noOptionsMessage={() => {
            return filters.technologies.length === maxTechnologies
              ? 'Has alcanzado el máximo de opciones'
              : 'No opciones disponibles';
          }}
        />
        <div className="flex items-center flex-shrink-0 mt-4 space-x-2 md:mt-0">
          <label
            htmlFor="toggle"
            className="flex-shrink w-24 text-sm leading-4 text-gray-50"
          >
            En búsqueda activa
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
            <input
              checked={filters.available}
              name="toggle"
              type="checkbox"
              onChange={(event) => {
                dispatch({
                  type: 'SET_AVAILABLE',
                  payload: event.target.checked,
                });
                activesQuery && router.push('/talentos');
              }}
              className={`form-checkbox absolute transition-transform border-gray focus:ring-offset-0 ring-0 outline-none focus:ring-0 focus:outline-none block w-6 h-6 rounded-full border-4 cursor-pointer ${
                filters.available
                  ? ' translate-x-4 text-green-400'
                  : 'border-gray-500'
              }`}
            />
            <label
              htmlFor="toggle"
              className={`${
                filters.available ? 'bg-white-400' : 'bg-gray-300'
              } block overflow-hidden border bg-gray-300 border-gray-500 h-6 rounded-full cursor-pointer`}
            ></label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
