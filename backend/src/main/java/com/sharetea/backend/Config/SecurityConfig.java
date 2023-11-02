package com.sharetea.backend.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        /*
        This is where we configure the security required for our endpoints and setup our app to serve as
        an OAuth2 Resource Server, using JWT validation.
        */
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(withDefaults())
                .authorizeHttpRequests((authorize) -> authorize
                    .requestMatchers(new AntPathRequestMatcher("/")).permitAll()
                    .requestMatchers(new AntPathRequestMatcher("/orders/add")).permitAll()
                    .requestMatchers(new AntPathRequestMatcher("/product/**")).permitAll()
                    .anyRequest().authenticated()
                    //.requestMatchers("/api/private-scoped").hasAuthority("SCOPE_read:messages")
                )
                .oauth2ResourceServer(oauth2 -> oauth2
                    .jwt(withDefaults())
                )
                .build();
    }
}