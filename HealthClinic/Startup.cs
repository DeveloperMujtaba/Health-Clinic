using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HealthClinic.Startup))]
namespace HealthClinic
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
