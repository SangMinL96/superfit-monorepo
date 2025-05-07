import { parseJwt } from '@src/common/webStorage/storage';
import { UserInfoItf } from '@superfit/types/user';
import type { GetServerSideProps } from 'next';
import nookies from 'nookies';
function Index() {
    return <div />;
}

export const getServerSideProps: GetServerSideProps = async context => {
    const cookies = nookies.get(context);

    const token = cookies.access_token;
    const userInfo = parseJwt(token) as UserInfoItf;
    const isPartner = ['business', 'staff'].includes(userInfo.login_type);
    console.log(isPartner);
    return {
        redirect: {
            permanent: true,
            destination: isPartner ? '/home/partner' : '/home/user',
        },
    };
};
export default Index;
