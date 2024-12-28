package ma.emsi.clientvoiture;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ClientVoitureApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientVoitureApplication.class, args);
	}

}
