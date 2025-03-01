import Image from 'next/image';

const cardData = [
  {
    title: 'Infants & Toddlers',
    description: 'Our infant and toddler classes are tailored to your child’s needs. Our highly trained teachers ensure that your little one is safe, secure, and happy. We work one-on-one with your child to help them reach their milestones.',
    image: 'child1.png'
  },
  {
    title: 'Early Preschool (2 & 3 Years Old)',
    description: 'In our early preschool program, children learn to become independent. They follow directions and work with other children, all while playing, exploring, and having fun in a safe environment.',
    image: 'child2.png'
  },
  {
    title: 'Preschool (3-5 Years Old)',
    description: 'Our preschool program prepares your child for kindergarten. We provide hands-on activities throughout the day, including circle time, worksheets, and outdoor play. Our open-ended learning centers allow for a variety of learning experiences.',
    image: 'child3.png'
  },
  {
    title: 'School-Age Program',
    description: 'Our before and after school care program is for children in kindergarten through 6th grade. Children enjoy both independent and organized activities. During the summer, we offer an exciting summer camp program that continues to foster learning and growth.',
    image: 'child4.png'
  },
]
export const OverviewCards = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("/blue-banner-background.jpg")',
        backgroundSize: 'cover',
        minHeight: '40vh',
        padding: '50px 0',
        position: 'relative'
      }}
    >
      <Image
        src="/corner_triangle.svg"
        alt="Decorative corner shape"
        width={150}
        height={50}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'rotate(0deg)',
          zIndex: 1,
          width: '100%',
          fill: '#f0f0f0',
        }}
      />
      <Image
        src="/corner_triangle.svg"
        alt="Decorative corner shape"
        width={150}
        height={50}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'rotate(180deg)',
          zIndex: 1,
          width: '100%'
        }}
      />
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h1>Providing Care From 6 Months & Up!</h1>
          </div>
          {cardData.map( ( cd ) => (
            <div className="col-3" key={cd.title}>
              <Image
                src={`/${cd.image}`}
                alt={cd.title}
                width={500}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px 8px 0 0'
                }}
              />
              <div className="paper">
                <span className="paperTitle">{cd.title}</span>
                <span>
                  {cd.description}
                </span>
              </div>
            </div>
          ) )}

        </div>
      </div>
    </div>
  )
}