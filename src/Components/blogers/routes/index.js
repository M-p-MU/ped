import Index from '../../../pages/bloggers/Blogs/Index';
import Create from '../../../pages/bloggers/Blogs/Create';
import Update from '../../../pages/bloggers/Blogs/Update';
import Analytics from '../../../pages/bloggers/Analytics';
import Calendar from '../../../pages/bloggers/Calendar';
import Inbox from '../../../pages/bloggers/Inbox';
import Network from '../../../pages/bloggers/Network';
import Home from '../../../pages/bloggers/Home';

const routes = [
    /**
        * Dashboard
        */ 
    {
        path: '',
        elt: <Home />
    },
    {
        path: 'stat',
        elt: <Analytics />
    },
    /**
     * Pages
     */
    //Blogs
    {
        path: 'blogs',
        elt: <Index />
    },
    {
        path: 'blogs-add',
        elt: <Create />
    },
    {
        path: 'blogs-edit/:id',
        elt: <Update />
    },
    //Network
    {
        path: 'network',
        elt: <Network />
    },
    /**
     * Apps
     */
    {
        path: 'inbox',
        elt: <Inbox />
    },
    {
        path: 'calendar',
        elt: <Calendar />
    },
];
export default routes;