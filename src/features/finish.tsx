import {
    Heading1,
  } from "../components";
export const Finish = () => {
    return (
        <div className={'page page--finish'}>
            <div className={"header w-full flex justify-center"}>
                <div className={'page--finish-wrapper flex flex-column justify-center' }>
                <Heading1 className={'short'}>Thank You</Heading1>
                <p className={'mt-4'}><b>Order ID : XXKYB</b></p>
                    <p className={'mt-2'}>Your order will be delivered today with GO-SEND</p>

                    <a href="#" className={'grey mt-4  flex items-center'}><span className={"mr-1 material-symbols-rounded"}>
arrow_back
</span> Go to homepage</a>
                    </div>
      </div>
        </div>
    )
}

export default Finish