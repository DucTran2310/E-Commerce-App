import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      {/* Super Deal! Free Shipping on Orders Over $50 */}
      <marquee width="100%" direction="right" style={{ fontSize: '14px', fontWeight: '600' }}>
        60-DAY EXTENDED FREE RETURNS
      </marquee>
    </Container>
  )
}

export default Announcement
