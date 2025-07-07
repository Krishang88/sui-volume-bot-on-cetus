# Deployment Guide

## Local Deployment

### Prerequisites
- Node.js 20 or higher
- npm or yarn
- SUI wallet with sufficient balance

### Steps
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment: `cp .env.example .env`
4. Update `.env` with your settings
5. Run the bot: `npm start`

## Docker Deployment

### Using Docker Compose (Recommended)

1. Build and run:
```bash
docker-compose up -d
```

2. View logs:
```bash
docker-compose logs -f sui-volume-bot
```

3. Stop the bot:
```bash
docker-compose down
```

### Manual Docker Build

1. Build the image:
```bash
docker build -t sui-volume-bot .
```

2. Run the container:
```bash
docker run -d \
  --name sui-volume-bot \
  --env-file .env \
  -v $(pwd)/logs:/app/logs \
  -v $(pwd)/data:/app/data \
  sui-volume-bot
```

## Production Deployment

### Environment Setup
- Use production RPC endpoints
- Secure private key storage
- Enable monitoring and logging
- Set up backup strategies

### Security Considerations
- Use dedicated wallets for bot operations
- Implement rate limiting
- Monitor transaction patterns
- Regular security audits

### Monitoring
- Set up health checks
- Monitor wallet balances
- Track transaction success rates
- Alert on unusual activity

## Cloud Deployment

### AWS
- Use EC2 for hosting
- Set up CloudWatch for monitoring
- Use AWS Secrets Manager for keys
- Implement auto-scaling

### Google Cloud
- Use Compute Engine
- Set up Cloud Monitoring
- Use Secret Manager
- Implement load balancing

### Azure
- Use Azure VMs
- Set up Azure Monitor
- Use Key Vault
- Implement availability sets

## Backup and Recovery

### Data Backup
- Regular wallet data backups
- Configuration file backups
- Transaction log backups

### Recovery Procedures
- Wallet restoration process
- Configuration recovery
- Transaction replay capabilities

## Troubleshooting

### Common Issues
1. **Insufficient Balance**: Check wallet funding
2. **RPC Errors**: Verify endpoint configuration
3. **Network Issues**: Check connectivity
4. **Permission Errors**: Verify file permissions

### Debug Mode
Enable debug logging:
```bash
DEBUG=true npm start
```

### Log Analysis
Monitor logs for:
- Transaction failures
- Balance warnings
- Network errors
- Performance issues
