//Author : Tejaswini G
package com.example;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {

        // Create mock
        ExternalApi mockApi =
                Mockito.mock(ExternalApi.class);

        // Inject mock
        MyService service =
                new MyService(mockApi);

        // Call method
        service.fetchData();

        // Verify call
        verify(mockApi).getData();
    }
}