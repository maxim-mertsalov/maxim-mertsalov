
export const metadata = {
    title: "Loading..."
  }

export default function Loading() {
    return (<div className="loader-wr">
        {/* <h2>Loading...</h2>
        <p>please-wait</p> */}
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>)
}