import React from 'react';
import { render } from '@testing-library/react';
import GetQuery from './components/FirebaseDB/query-Service/GetQuery';
import LogInHandler from './components/Auth/LogInHandler';
import DetailsQuery from './components/FirebaseDB/Query-Service/DetailsQuery';
import Home from './components/Home';
import App from './App';
import HomeCom from './components/Home-Components/HomeCom';

//footer

test('renders footer component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/footer/i);
    expect(linkElement).toBeInTheDocument();
});

//Queryes from database

test('Get post by id from server', async () => {
    const query = new DetailsQuery();
    const result = query.getDetails("KhCgBha0vqfVWcygA4pd");
    if (await result) {
        expect(result.length).not.toBe(null);
    }
});

test('Log in users and return token', async () => {
    const payload = {
        email: "aaa@aaa.com",
        password: "123456"
    }
    const user = await LogInHandler(payload);
    expect(user.token).not.toBe(null);
});

test('Log in users and return email', async () => {
    const payload = {
        email: "aaa@aaa.com",
        password: "123456"
    }
    const user = await LogInHandler(payload);
    expect(user.email).toBe("aaa@aaa.com");
});

test('Get all data from server', async () => {
    const query = new GetQuery();
    const result = await query.getPosts();
    if (await result) {
        expect(result.length).toBe(5);
    }
});

test('Get images by post.id from server', async () => {
    const query = new GetQuery();
    const result = await query.getImagesbyId("KhCgBha0vqfVWcygA4pd"); //item is not present
    if (await result) {
        expect(result.length).not.toBe(null);
    }
});

//Components

test('renders Search component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Layout component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/layout/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/navbar/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Contact component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/contact/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders About component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
});

//Home component

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/ThirdRow/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/SecondRowComp/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/RightComponent/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/LeftSideComponent/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<HomeCom />);
    const linkElement = getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Home component', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/HomeCom/i);
    expect(linkElement).toBeInTheDocument();
});
