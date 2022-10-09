import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://www.ltmetro.com/wp-content/uploads/2020/06/Hyderabad-Metro-Rail-Honourable-Prime-Minister-Narendra-Modi-Flags-off-on-28th-November-2017-2.jpg" },
    { url: "https://www.ltmetro.com/wp-content/uploads/2018/10/EvolutionofaMetroStation-StageEight.jpg" },
    { url: "https://www.ltmetro.com/wp-content/uploads/2021/02/1612516346320.jpg" }
];

function Home() {
    return(
        <div className="container-fluid">
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            <h1 className="text-center mt-5 container-fluid">Metro Network Map</h1>
            <hr
                style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            />

            <img
                src="https://www.ltmetro.com/wp-content/uploads/2021/03/Network-Map-small-min.jpg"
                width={600}
                height={340}
                display="flex"
                flexDirection="row"
                alignItems="center"
                alt="new"
            />

        </div>
    )
}

export default Home;