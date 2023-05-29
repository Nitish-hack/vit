
import React from 'react';
import "../assets/css/EventDetailsStyles.css";
import EventCard from '../components/EventCard';

const Data=
    {
      "_id": "6472e74c38678d461000b911",
      "title": "Hackathon Workshop",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repellendus aliquid mollitia nostrum cupiditate, laborum eligendi incidunt id quos totam fugit nisi odio earum alias! Corporis reiciendis veniam quidem mollitia deleniti? Labore esse doloribus ipsam accusantium, omnis molestias voluptate eos odit accusamus quae est consectetur illum minima assumenda? Commodi sequi sit dolore aperiam fugiat? Animi adipisci veritatis ab iure in unde quaerat fuga quia voluptatibus, pariatur consequuntur facere quam enim, nobis laborum? Aliquam maiores totam mollitia voluptatem! Dolorum asperiores blanditiis illo quae, laudantium est iste esse officia. Exercitationem quos assumenda, dolor qui ab officia voluptates cupiditate tenetur natus quo cum impedit distinctio culpa! Enim sed, eligendi magnam ab minima deserunt iure accusantium, animi odio, tenetur optio. Numquam soluta saepe at, impedit quod atque pariatur. Quis sunt saepe obcaecati voluptatem consequatur corrupti quasi, distinctio expedita facilis impedit incidunt eveniet nobis, assumenda molestiae! Porro, distinctio. Nemo perspiciatis, modi dicta blanditiis dolorum quo ducimus asperiores quis reiciendis ipsam doloremque minima eligendi harum repellendus hic delectus vitae voluptatum vero praesentium explicabo laborum. Optio sapiente blanditiis assumenda aspernatur eum ipsa rerum quibusdam? Perspiciatis sint quod harum quos. Unde cum iure adipisci quisquam nam excepturi laborum voluptates quidem accusantium esse minima dolores qui tempore, vero perspiciatis totam. Consequuntur commodi laudantium consequatur recusandae sed autem quo quaerat beatae hic atque at dicta aperiam fuga provident, modi amet sunt deleniti ad numquam, enim veritatis quis explicabo voluptatem debitis. Aut doloremque repellat accusantium, iusto ut impedit nesciunt quas excepturi blanditiis et doloribus quos, aliquid asperiores repudiandae culpa laborum architecto est ab. Error laudantium voluptatem, consectetur porro voluptas beatae illo voluptate ipsam accusamus architecto commodi soluta eius rerum culpa unde expedita reprehenderit eligendi atque sint ut voluptatibus optio officiis. Voluptates aliquid unde itaque inventore obcaecati fuga ratione, repudiandae totam corrupti placeat autem ea? Totam doloribus voluptate recusandae. Inventore, dicta voluptates.",
      "date": "2023-06-01",
      "time": "14:00",
      "location": "Conference Room A",
      "category": "Workshop",
      "organizer": "Tech Events",
      "image": "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "registeredUsers": [],
      "createdAt": "2023-05-28T05:31:56.689Z",
      "__v": 0
    }

const EventDetails = () => {
  return (
    <>
        <section className="EventDetailsSection">
            <div className="banner">
                <img src={Data.image} alt="" />
            </div>
            <div className="detailsContainer">
                 <div className="container1">
                    <h1 className='title'>{Data.title}</h1>
                    <h3 className='deadline'>Data.deadline</h3>
                 </div>
                 <div className="container2">
                    <EventCard />
                 </div>
            </div>
            <h2 className="descriptionHeading">Description</h2>
            <p className="description">
                {Data.description}
            </p>
        </section>
    </>
  )
}

export default EventDetails

