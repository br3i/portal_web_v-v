const {
    mokConfirmCreate,
    mokConfirmRead,
    mokConfirmUpdate,
    mokConfirmDelete
  } = require('../pages/examples/serviceOperations');
  
  describe('Service Operations', () => {
    beforeEach(() => {
      // Resetea los mocks antes de cada prueba
      jest.clearAllMocks();
      global.alert = jest.fn();
      global.confirm = jest.fn(() => true);
    });
  
    it('should create a service with valid input', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'createServiceName') return { value: 'Test Service' };
          if (id === 'createServiceDescription') return { value: 'This is a test description.' };
          return null;
        }),
      };
  
      mokConfirmCreate();
  
      expect(alert).toHaveBeenCalledWith('¡Servicio creado exitosamente!');
    });
  
    it('should show an alert if service name is missing when creating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'createServiceName') return { value: '' };
          if (id === 'createServiceDescription') return { value: 'This is a test description.' };
          return null;
        }),
      };
  
      mokConfirmCreate();
  
      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del servicio.');
    });
  
    it('should show an alert if service description is too short when creating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'createServiceName') return { value: 'Test Service' };
          if (id === 'createServiceDescription') return { value: 'Short' };
          return null;
        }),
      };
  
      mokConfirmCreate();
  
      expect(alert).toHaveBeenCalledWith('La descripción del servicio debe tener al menos 10 caracteres.');
    });
  
    it('should read a service with valid input', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'readServiceName') return { value: 'Test Service' };
          return null;
        }),
      };
  
      mokConfirmRead();
  
      expect(alert).toHaveBeenCalledWith('¡Búsqueda exitosa!');
    });
  
    it('should show an alert if service name is missing when reading', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'readServiceName') return { value: '' };
          return null;
        }),
      };
  
      mokConfirmRead();
  
      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del servicio.');
    });
  
    it('should show an alert if service name is too short when reading', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'readServiceName') return { value: 'Te' };
          return null;
        }),
      };
  
      mokConfirmRead();
  
      expect(alert).toHaveBeenCalledWith('El nombre del servicio debe tener al menos 3 caracteres.');
    });
  
    it('should update a service with valid input', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'updateServiceName') return { value: 'Test Service' };
          if (id === 'updateServiceDescription') return { value: 'Updated description.' };
          return null;
        }),
      };
  
      mokConfirmUpdate();
  
      expect(alert).toHaveBeenCalledWith('¡Servicio actualizado exitosamente!');
    });
  
    it('should show an alert if service name is missing when updating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'updateServiceName') return { value: '' };
          if (id === 'updateServiceDescription') return { value: 'Updated description.' };
          return null;
        }),
      };
  
      mokConfirmUpdate();
  
      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del servicio.');
    });
  
    it('should show an alert if service name is too short when updating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'updateServiceName') return { value: 'Te' };
          if (id === 'updateServiceDescription') return { value: 'Updated description.' };
          return null;
        }),
      };
  
      mokConfirmUpdate();
  
      expect(alert).toHaveBeenCalledWith('El nombre del servicio debe tener al menos 3 caracteres.');
    });
  
    it('should show an alert if service description is missing when updating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'updateServiceName') return { value: 'Test Service' };
          if (id === 'updateServiceDescription') return { value: '' };
          return null;
        }),
      };
  
      mokConfirmUpdate();
  
      expect(alert).toHaveBeenCalledWith('Por favor, ingrese la descripción del servicio.');
    });
  
    it('should show an alert if service description is too short when updating', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'updateServiceName') return { value: 'Test Service' };
          if (id === 'updateServiceDescription') return { value: 'Short' };
          return null;
        }),
      };
  
      mokConfirmUpdate();
  
      expect(alert).toHaveBeenCalledWith('La descripción del servicio debe tener al menos 10 caracteres.');
    });
  
    it('should delete a service with valid input', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'deleteServiceName') return { value: 'Test Service' };
          return null;
        }),
      };
  
      mokConfirmDelete();
  
      expect(alert).toHaveBeenCalledWith('¡Servicio eliminado exitosamente!');
    });
  
    it('should show an alert if service name is missing when deleting', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'deleteServiceName') return { value: '' };
          return null;
        }),
      };
  
      mokConfirmDelete();
  
      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del servicio.');
    });
  
    it('should show an alert if service name is too short when deleting', () => {
      global.document = {
        getElementById: jest.fn((id) => {
          if (id === 'deleteServiceName') return { value: 'Te' };
          return null;
        }),
      };
  
      mokConfirmDelete();
  
      expect(alert).toHaveBeenCalledWith('El nombre del servicio debe tener al menos 3 caracteres.');
    });
  });