import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    .user__section {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        padding: 16px;
    }

    .img__profile {
        width: 80px;
        height: 80px;
        border: ${({ theme }) => theme.borderBase} solid 2px;
        border-radius: 50%
    }

    h2 {
        color: ${({ theme }) => theme.textColorBase};
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
    }

    p {
        color: ${({ theme }) => theme.textColorBase2};
        font-size: 16;
        font-weight: 400;
        line-height: 20px;
    }
`;
const StyledBanner = styled.div`
    /* background-color: blue; */
    background: url(${({ bg }) => bg.bg}) no-repeat;
    background-size: cover;
    height: 250px;
`;

export default function Header(props){
    const user = props.user;
    const bg = props.bg;
    return (
        <StyledHeader>
            <StyledBanner bg={props} />
            <section className='user__section'>
                <img className='img__profile' src={`https://github.com/${user.github}.png`} alt="" />
                <div className='user__info'>
                    <h2>{user.name}</h2>
                    <p>{user.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
};
