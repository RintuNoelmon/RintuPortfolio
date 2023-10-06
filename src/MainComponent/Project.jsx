import { Project_Data } from "./Project_Data";
import './Project.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

function Project() {
  
return (
    <>
     <section>
       <Swiper 
         style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
       > 

       <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://img.freepik.com/premium-photo/dark-black-background-with-notebook-pen-premium-photo_659511-11.jpg)',
              
          }}
          data-swiper-parallax="-23%"
        ></div>

         {
            Project_Data.map(({id,title,description})=>{
                return(
                    <SwiperSlide className="project_card" key={id}>

                        <h3 className="project_name">{title}</h3>
                        <p className="project_description">{description}</p>

                    </SwiperSlide>
                )
            })

        }
         


       </Swiper>
     </section>
     
    </>
  );
}
export default Project;