// TODO - Create form for adding/updating vehicle information via API calls

import { Input } from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseVIN, chooseMake, chooseModel, chooseYear, chooseColor, chooseCarName } from "../redux/slices/RootSlice"

// interfaces

interface VehicleFormProps {
  id?: string[],
}

export const VehicleForm = (props:VehicleFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);

    if (props.id && props.id.length > 0){
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data } ${ props.id }`);
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset();
    }
    else{
      // use dispatch to update our state in our store
      dispatch(chooseVIN(data.vin));
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));
      dispatch(chooseCarName(data.car_name));

      server_calls.create(store.getState(), '94481f33-8150-4c15-90f8-087f3bfe4c6e')
      setTimeout( () => {window.location.reload()}, 10000)
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div>
          <label htmlFor="vin">VIN</label>
          <Input {...register('vin')} name='vin' placeholder="VIN" />
        </div>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div>
          <label htmlFor="car_name">Car Name <span className="text-slate-300">(Optional)</span> </label>
          <Input {...register('car_name')} name='car_name' placeholder="Car Name" />
        </div>
        <div className="flex p-1">
          <button type="submit"
          className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}
