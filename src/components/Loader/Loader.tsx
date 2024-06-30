import { FC } from 'react';
import ClipLoader from 'react-spinners/ClipLoader'
import style from './Loader.module.css'


const Loader: FC = () => {
 
      return (
        <div className={style.loaderStyle}>
            <ClipLoader
                color='SlateBlue'
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
export default Loader;