export const addAlert = (text, style) => ({
    type: 'ADD_ALERT',
    text,
    style
});

export const removeAlert = id => ({
    type: 'REMOVE_ALERT',
    id
});

export const guardarCadastro = cadastro => ({
    type: 'CADASTRO_CREATE',
    cadastro
});

export const resultSeach = result => ({
    type: 'SEARCH_RESULT',
    result
});


export const SeachEquipamentos = equipamentos => ({
    type: 'SEARCH_RESULT_EQUIPAMENTO',
    equipamentos
});
export const addEquipamento = ({id, nome, ip, porta, usuario, senha}) => ({
    type: 'ADD_EQUIPAMENTO',
    id,
    nome,
    ip,
    porta,
    usuario,
    senha
});
export const removeEquipamento = id => ({
    type: 'REMOVE_EQUIPAMENTO',
    id
});


export const SeachClientes = clientes => ({
    type: 'SEARCH_RESULT_CLIENTE',
    clientes
});
export const addCliente = ({nContrato, nome, descricao, internet, velocidade, entregue, serial, telefone, nTelefone, telefoneStatus, internetStatus}) => ({
    type: 'ADD_CLIENTE',
    nContrato,
    nome,
    descricao,
    internet,
    velocidade,
    entregue,
    serial,
    telefone,
    nTelefone,
    telefoneStatus,
    internetStatus
});
export const serviceCliente = ({nContrato, internet, velocidade, serial, telefone, nTelefone}) => ({
    type: 'SERVICE_CLIENTE',
    nContrato,
    internet,
    velocidade,
    serial,
    telefone,
    nTelefone
});
export const removeCliente = nContrato => ({
    type: 'REMOVE_CLIENTE',
    nContrato
});

export const SearchGrupos = grupos => ({
    type: 'SEARCH_RESULT_GRUPO',
    grupos
});
export const addGrupo = ({id, nome, descricao, internet, velocidade, olts, clientes}) => ({
    type: 'ADD_GRUPO',
    id,
    nome,
    descricao,
    olts,
    clientes
});
export const removeGrupo = id => ({
    type: 'REMOVE_GRUPO',
    id
});

export const logIn = ({id, nome, perfil, preferencia}) => ({
    type: 'LOGIN_USER',
    id,
    nome,
    perfil,
    preferencia
});
export const logOut = ({id, nome, perfil, preferencia}) => ({
    type: 'LOGOUT_USER',
    
    id,
    nome,
    perfil,
    preferencia
});