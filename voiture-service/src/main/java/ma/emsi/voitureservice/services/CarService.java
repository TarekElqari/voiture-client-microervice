package ma.emsi.voitureservice.services;

import ma.emsi.voitureservice.entities.Car;
import ma.emsi.voitureservice.entities.Client;
import ma.emsi.voitureservice.models.CarResponse;
import ma.emsi.voitureservice.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private CarRepository carRepository;
    public Client getClientById(Long clientId) {
        String url = "http://localhost:8888/SERVICE-CLIENT/api/client/" + clientId;
        return restTemplate.getForObject(url, Client.class);
    }
    public List<CarResponse> findAll() {
        return carRepository.findAll().stream()
                .map(car -> {
                    Client client = getClientById(car.getClientId());
                    return new CarResponse(car.getId(), car.getBrand(), car.getModel(), car.getMatricule(), client);
                })
                .collect(Collectors.toList());
    }
    public CarResponse findById(Long id) throws Exception {
        Optional<Car> optionalCar = carRepository.findById(id);
        if (optionalCar.isEmpty()) {
            throw new Exception("Car not found with id: " + id);
        }
        Car car = optionalCar.get();
        Client client = getClientById(car.getClientId());
        return new CarResponse(car.getId(), car.getBrand(), car.getModel(), car.getMatricule(), client);
    }
}
