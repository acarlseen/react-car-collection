// TODO - Create form for adding/updating vehicle information via API calls

import { Input } from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseVIN, chooseMake, chooseModel, chooseYear, chooseColor, chooseCarName } from "../redux/slices/RootSlice"

// interfaces

interface VehicleFormProps {
  id?: string[],
  carIDs?: string[],
  handleRefresh?: () => void,
  onClose?: () => void,
}

export const VehicleForm = (props:VehicleFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.carIDs}`);

    if (props.carIDs && props.carIDs.length > 0){

      // useEffect(() => {
      //   const data = async () => {
      //     const response = await server_calls.getCar(props.id[0])
      //   }
      // }, [])



      // below is original code
      console.log(`data: ${data}`)
      console.log(`CarID: ${props.carIDs[0]}`)
      server_calls.update(data, '94481f33-8150-4c15-90f8-087f3bfe4c6e', props.carIDs[0])
      console.log(`Updated: ${ data } ${ props.id }`);
      //setTimeout(() => {window.location.reload()}, 10000);
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
      //setTimeout( () => {window.location.reload()}, 10000)
    }
    if (props.onClose){
      props.onClose();
    }
    if (props.handleRefresh) {
      props.handleRefresh();
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
