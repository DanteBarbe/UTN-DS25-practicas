import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaBookMedical } from 'react-icons/fa';

function AddBookButton({ addBook, books }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Para generar el id nuevo cuando cambian los libros
    const getNextId = () => {
        if (!books || books.length === 0) return 1;
        return Math.max(...books.map(book => book.id)) + 1;
    };

    const [datos, setDatos] = useState({
        id: 0,
        title: "",
        image: "",
        author: "",
        description: "",
        genre: ""
    });

    useEffect(() => {
      setDatos(prevDatos => ({
        ...prevDatos,
        id: getNextId()
      }));
    }, [books]);  // Cada vez que cambian los libros, actualizo el id

    const [errores, setErrores] = useState({});

    const actualizarCampo = (campo, valor) => {
        setDatos({ ...datos, [campo]: valor });
        if (errores[campo]) {
            setErrores({ ...errores, [campo]: null });
        }
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!datos.title.trim()) {
            nuevosErrores.title = "El título es requerido";
        } else if (datos.title.length < 2) {
            nuevosErrores.title = "El título debe tener al menos 2 caracteres";
        }
        if (!datos.author.trim()) {
            nuevosErrores.author = "El autor es requerido";
        }
        if (!datos.genre.trim()) {
            nuevosErrores.genre = "El género es requerido";
        }
        if (!datos.description.trim()) {
            nuevosErrores.description = "La descripción es requerida";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            addBook(datos);  // <-- Acá agrego el libro a la lista
            alert("¡Registro exitoso!");
            handleClose();
            // Limpio campos y actualizo id para próximo libro
            setDatos({
                id: getNextId() + 1,
                title: "",
                image: "",
                author: "",
                description: "",
                genre: ""
            });
            setErrores({});
        } else {
            console.log("Formulario con errores:", errores);
        }
    };

    return (
        <>
            <button className="btn btn-success" onClick={handleShow}>
                <FaBookMedical style={{ marginRight: '8px' }} />
                Crear libro
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={enviarFormulario}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del libro"
                                value={datos.title}
                                onChange={(e) => actualizarCampo('title', e.target.value)}
                                isInvalid={!!errores.title}
                                autoFocus
                            />
                            <Form.Control.Feedback type="invalid">
                                {errores.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAuthor">
                            <Form.Label>Autor</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Autor del libro"
                                value={datos.author}
                                onChange={(e) => actualizarCampo('author', e.target.value)}
                                isInvalid={!!errores.author}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errores.author}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGenre">
                            <Form.Label>Género</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Género del libro"
                                value={datos.genre}
                                onChange={(e) => actualizarCampo('genre', e.target.value)}
                                isInvalid={!!errores.genre}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errores.genre}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Descripción del libro"
                                value={datos.description}
                                onChange={(e) => actualizarCampo('description', e.target.value)}
                                isInvalid={!!errores.description}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errores.description}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>URL de la imagen (opcional)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="URL de la imagen"
                                value={datos.image}
                                onChange={(e) => actualizarCampo('image', e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                        <Button variant="secondary" onClick={handleClose} style={{ marginLeft: '10px' }}>
                            Cancelar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddBookButton;