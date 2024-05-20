// Asegúrate de tener estas funciones exportadas correctamente en el archivo correspondiente
const {
    mokConfirmEntry,
    mokConfirmExit,
    mokConfirmIncident
  } = require('../pages/examples/securityOperations');
  
  describe('Security Operations', () => {
    beforeEach(() => {
      // Resetea los mocks antes de cada prueba
      jest.clearAllMocks();
      global.alert = jest.fn();
      global.confirm = jest.fn(() => true);
    });
  
   /* describe('Entry Registration', () => {
      it('should register entry with valid input', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'entryVisitorName') return { value: 'Test Visitor' };
            if (id === 'entryPurpose') return { value: 'Business Meeting' };
            return null;
          }),
        };
  
        mokConfirmEntry();
  
        expect(alert).toHaveBeenCalledWith('¡Entrada registrada exitosamente!');
      });
  
      it('should show an alert if visitor name is missing when registering entry', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'entryVisitorName') return { value: '' };
            if (id === 'entryPurpose') return { value: 'Business Meeting' };
            return null;
          }),
        };
  
        mokConfirmEntry();
  
        expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del visitante.');
      });
  
      it('should show an alert if visitor name is too short when registering entry', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'entryVisitorName') return { value: 'Te' };
            if (id === 'entryPurpose') return { value: 'Business Meeting' };
            return null;
          }),
        };
  
        mokConfirmEntry();
  
        expect(alert).toHaveBeenCalledWith('El nombre del visitante debe tener al menos 3 caracteres.');
      });
  
      it('should show an alert if purpose is missing when registering entry', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'entryVisitorName') return { value: 'Test Visitor' };
            if (id === 'entryPurpose') return { value: '' };
            return null;
          }),
        };
  
        mokConfirmEntry();
  
        expect(alert).toHaveBeenCalledWith('Por favor, ingrese el motivo de la visita.');
      });
  
      it('should show an alert if purpose is too short when registering entry', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'entryVisitorName') return { value: 'Test Visitor' };
            if (id === 'entryPurpose') return { value: 'Short' };
            return null;
          }),
        };
  
        mokConfirmEntry();
  
        expect(alert).toHaveBeenCalledWith('El motivo de la visita debe tener al menos 5 caracteres.');
      });
    });*/
    // securityOperations.test.js

describe('Entry Registration', () => {
  beforeAll(() => {
      // Mock de alert antes de todas las pruebas
      global.alert = jest.fn();
  });

  beforeEach(() => {
      // Reiniciar el mock antes de cada prueba
      alert.mockClear();
  });

  it('should register entry with valid input', () => {
      global.document = {
          getElementById: jest.fn((id) => {
              if (id === 'entryVisitorName') return { value: 'Test Visitor' };
              if (id === 'entryPurpose') return { value: 'Business Meeting' };
              return null;
          }),
      };

      mokConfirmEntry();

      expect(alert).toHaveBeenCalledWith('¡Entrada registrada exitosamente!');
  });

  it('should show an alert if visitor name is missing when registering entry', () => {
      global.document = {
          getElementById: jest.fn((id) => {
              if (id === 'entryVisitorName') return { value: '' };
              if (id === 'entryPurpose') return { value: 'Business Meeting' };
              return null;
          }),
      };

      mokConfirmEntry();

      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del visitante.');
  });

  it('should show an alert if visitor name is too short when registering entry', () => {
      global.document = {
          getElementById: jest.fn((id) => {
              if (id === 'entryVisitorName') return { value: 'Te' };
              if (id === 'entryPurpose') return { value: 'Business Meeting' };
              return null;
          }),
      };

      mokConfirmEntry();

      expect(alert).toHaveBeenCalledWith('El nombre del visitante debe tener al menos 3 caracteres.');
  });

  it('should show an alert if purpose is missing when registering entry', () => {
      global.document = {
          getElementById: jest.fn((id) => {
              if (id === 'entryVisitorName') return { value: 'Test Visitor' };
              if (id === 'entryPurpose') return { value: '' };
              return null;
          }),
      };

      mokConfirmEntry();

      expect(alert).toHaveBeenCalledWith('Por favor, ingrese el motivo de la visita.');
  });

  it('should show an alert if purpose is too short when registering entry', () => {
      global.document = {
          getElementById: jest.fn((id) => {
              if (id === 'entryVisitorName') return { value: 'Test Visitor' };
              if (id === 'entryPurpose') return { value: 'Shor' }; // Propósito demasiado corto
              return null;
          }),
      };

      mokConfirmEntry();

      expect(alert).toHaveBeenCalledWith('El motivo de la visita debe tener al menos 5 caracteres.');
  });
});

  
  
    describe('Exit Registration', () => {
      it('should register exit with valid input', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'exitVisitorName') return { value: 'Test Visitor' };
            return null;
          }),
        };
  
        mokConfirmExit();
  
        expect(alert).toHaveBeenCalledWith('¡Salida registrada exitosamente!');
      });
  
      it('should show an alert if visitor name is missing when registering exit', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'exitVisitorName') return { value: '' };
            return null;
          }),
        };
  
        mokConfirmExit();
  
        expect(alert).toHaveBeenCalledWith('Por favor, ingrese el nombre del visitante.');
      });
  
      it('should show an alert if visitor name is too short when registering exit', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'exitVisitorName') return { value: 'Te' };
            return null;
          }),
        };
  
        mokConfirmExit();
  
        expect(alert).toHaveBeenCalledWith('El nombre del visitante debe tener al menos 3 caracteres.');
      });
    });
  
    describe('Incident Registration', () => {
      it('should register incident with valid input', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'incidentDescription') return { value: 'This is a detailed description of the incident.' };
            return null;
          }),
        };
  
        mokConfirmIncident();
  
        expect(alert).toHaveBeenCalledWith('¡Incidente registrado exitosamente!');
      });
  
      it('should show an alert if description is missing when registering incident', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'incidentDescription') return { value: '' };
            return null;
          }),
        };
  
        mokConfirmIncident();
  
        expect(alert).toHaveBeenCalledWith('Por favor, ingrese la descripción del incidente.');
      });
  
      it('should show an alert if description is too short when registering incident', () => {
        global.document = {
          getElementById: jest.fn((id) => {
            if (id === 'incidentDescription') return { value: 'Too short' };
            return null;
          }),
        };
  
        mokConfirmIncident();
  
        expect(alert).toHaveBeenCalledWith('La descripción del incidente debe tener al menos 10 caracteres.');
      });
    });
  });
  