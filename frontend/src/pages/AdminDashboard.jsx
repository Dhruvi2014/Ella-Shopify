import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      login(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-box">
        <h2>ELLA ADMIN</h2>
        {error && <p style={{color:'red', marginBottom: '15px'}}>{error}</p>}
        <form className="admin-login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button type="submit">LOGIN</button>
        </form>
        <div style={{marginTop:'20px'}}>
            <Link to="/" style={{color:'#666', textDecoration:'underline'}}>Back to Store</Link>
        </div>
      </div>
    </div>
  );
};

const DashboardOverview = ({ dataCounts }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h3 style={{marginBottom:'20px', fontWeight: '600'}}>Overview</h3>
            <div className="admin-cards" style={{ flexWrap: 'wrap' }}>
                {Object.entries(dataCounts).map(([key, count]) => (
                    <div className="admin-card" key={key} onClick={() => navigate(`/admin/${key}`)} style={{ minWidth: '200px', marginBottom: '20px' }}>
                    <div className="admin-card-title">Total {key.toUpperCase()}</div>
                    <div className="admin-card-value">{count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GenericList = ({ title, entityType, items, columns, onDelete }) => {
    return (
        <div>
            <h3 style={{marginBottom:'20px', fontWeight: '600'}}>{title}</h3>
            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            {columns.map(c => <th key={c.key}>{c.label}</th>)}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item._id}>
                                {columns.map(c => (
                                    <td key={c.key}>
                                        {c.render ? c.render(item) : item[c.key]}
                                    </td>
                                ))}
                                <td>
                                    <button 
                                        style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', fontSize: '12px' }}
                                        onClick={() => onDelete(entityType, item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && (
                            <tr>
                                <td colSpan={columns.length + 1} style={{textAlign: 'center'}}>No items found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  
  const [dataStore, setDataStore] = useState({
      user: [],
      product: [],
      brand: [],
      blog: [],
      faq: [],
      contactus: [],
      lookbook: []
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.token) {
        fetchAll();
    }
  }, [user]);

  const fetchAll = async () => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const entities = ['user', 'product', 'brand', 'blog', 'faq', 'contactus', 'lookbook'];
    
    entities.forEach(async (entity) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/admin/${entity}`, config);
            setDataStore(prev => ({ ...prev, [entity]: res.data }));
        } catch (err) {
            console.error(`Status check for ${entity} failed:`, err);
        }
    });
  };

  const handleDelete = async (entityType, id) => {
      const confirm = window.confirm(`Are you sure you want to delete this ${entityType}?`);
      if (!confirm) return;

      try {
          const config = { headers: { Authorization: `Bearer ${user.token}` } };
          await axios.delete(`http://localhost:5000/api/admin/${entityType}/${id}`, config);
          setDataStore(prev => ({
              ...prev,
              [entityType]: prev[entityType].filter(item => item._id !== id)
          }));
      } catch (err) {
          alert('Failed to delete: ' + (err.response?.data?.message || err.message));
      }
  };

  if (!user) {
    return <AdminLogin />;
  }

  const columnsConfig = {
      user: [
          { key: '_id', label: 'ID' },
          { key: 'firstName', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'createdAt', label: 'Joined', render: i => new Date(i.createdAt).toLocaleDateString() }
      ],
      product: [
          { key: 'image', label: 'Image', render: i => <img src={i.image} alt={i.name} style={{width:'40px', height:'40px', objectFit:'cover'}} /> },
          { key: 'name', label: 'Name' },
          { key: 'price', label: 'Price', render: i => `$${i.price}` },
          { key: 'badge', label: 'Status' }
      ],
      brand: [
          { key: 'image', label: 'Image', render: i => <img src={i.image} alt="brand" style={{width:'40px', objectFit:'contain'}} /> }
      ],
      blog: [
          { key: 'image', label: 'Image', render: i => <img src={i.image} alt={i.title} style={{width:'40px', height:'40px', objectFit:'cover'}} /> },
          { key: 'title', label: 'Title' },
          { key: 'date', label: 'Date' }
      ],
      faq: [
          { key: 'question', label: 'Question' },
          { key: 'answer', label: 'Answer' }
      ],
      contactus: [
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'message', label: 'Message' }
      ],
      lookbook: [
          { key: 'image', label: 'Image', render: i => <img src={i.image} alt="lookbook" style={{width:'40px', height:'40px', objectFit:'cover'}} /> },
          { key: 'title', label: 'Title' }
      ]
  };

  const getActiveTabStr = () => {
      const path = location.pathname.replace('/admin', '');
      if (!path || path === '/') return 'Dashboard';
      return path.substring(1).toUpperCase() + ' Management';
  }

  return (
    <div className="admin-container">
        <div className="admin-sidebar" style={{overflowY: 'auto'}}>
            <div className="admin-sidebar-header">ELLA ADMIN</div>
            <div className="admin-nav">
                <div className={`admin-nav-item ${location.pathname === '/admin' ? 'active' : ''}`} onClick={() => navigate('/admin')}>
                    <i className="fas fa-home"></i> Dashboard
                </div>
                {Object.keys(dataStore).map(entity => (
                    <div key={entity} className={`admin-nav-item ${location.pathname.includes(`/admin/${entity}`) ? 'active' : ''}`} onClick={() => navigate(`/admin/${entity}`)}>
                        <i className="fas fa-database"></i> {entity.toUpperCase()}
                    </div>
                ))}
                <div className="admin-nav-item" onClick={() => navigate('/')}>
                    <i className="fas fa-store"></i> Back to Store
                </div>
            </div>
        </div>
        <div className="admin-main">
            <div className="admin-topbar">
                <div className="admin-topbar-title">{getActiveTabStr()}</div>
                <div className="admin-topbar-user">
                    <span>Admin: {user.firstName || user.name}</span>
                    <button className="admin-logout-btn" onClick={logout}>LOGOUT</button>
                </div>
            </div>
            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<DashboardOverview dataCounts={Object.fromEntries(Object.entries(dataStore).map(([k, v]) => [k, v.length]))} />} />
                    {Object.keys(dataStore).map(entity => (
                        <Route key={entity} path={`/${entity}`} element={
                            <GenericList 
                                title={`${entity.toUpperCase()} List`} 
                                entityType={entity} 
                                items={dataStore[entity]} 
                                columns={columnsConfig[entity] || [{ key: '_id', label: 'ID' }]}
                                onDelete={handleDelete}
                            />
                        } />
                    ))}
                </Routes>
            </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
